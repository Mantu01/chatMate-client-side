import React, { useState, useEffect } from 'react';
import { HiMenu } from 'react-icons/hi';
import Nav from '../components/Nav';
import { FaTimes } from 'react-icons/fa';
import authService from '../services/authService.js';
import messagesService from '../services/messageService.js';

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [loggedInUserId, setLoggedInUserId] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    useEffect(() => {
        authService.getCurrentUser()
            .then((response) => {
                setLoggedInUserId(response._id);
            })
            .catch((error) => console.error('Error fetching logged-in user:', error));

        authService.getAllUsers()
            .then((response) => setUsers(response))
            .catch((error) => console.error('Error fetching users:', error));
    }, []);

    const handleUserSelect = (user) => {
        setSelectedUser(user);
        setIsSidebarOpen(false); // Auto-close sidebar on small screens when a user is selected
        messagesService.getMessagesWithUser(user.userName)
            .then((response) => setMessages(response))
            .catch((error) => console.error('Error fetching messages:', error));
    };

    const handleMessageSend = async () => {
        if (message.trim()) {
            const messageData = {
                targetUser: selectedUser._id,
                text: message,
            };
            console.log(messageData);
            try {
                await messagesService.sendMessage(messageData);
                setMessages((prevMessages) => [...prevMessages, messageData]);
                setMessage('');
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Nav />
            <section className="flex-grow">
                <div className="flex flex-col md:flex-row h-full">
                    {/* Sidebar */}
                    <div
                        className={`fixed md:static top-0 left-0 w-full bg-[#4f4848] md:w-1/4 p-4 border-b md:border-b-0 md:border-r z-10 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}
                    >
                        <button
                            onClick={() => setIsSidebarOpen(false)}
                            className="md:hidden absolute top-4 right-4 font-bold"
                        >
                            <FaTimes />
                        </button>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">Online Buddies</h2>
                        <ul className="space-y-2">
                            {users.map((user) => (
                                <li
                                    key={user._id}
                                    onClick={() => handleUserSelect(user)}
                                    className="cursor-pointer py-2 px-4 rounded-lg hover:bg-blue-600 flex items-center space-x-3 transition duration-300"
                                >
                                    <div className="relative w-10 h-10 rounded-full">
                                        <img
                                            src={user.avatar || 'https://via.placeholder.com/150'}
                                            alt={user.fullName}
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                        <span
                                            className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${user.activeStatus ? 'bg-green-500' : 'bg-red-500'}`}
                                        />
                                    </div>
                                    <span className="text-sm md:text-base font-semibold">{user.fullName}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Chat Section */}
                    <div className="flex-1 p-4 flex flex-col md:ml-0">
                        {!isSidebarOpen && (
                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className="md:hidden mb-4 bg-blue-600 px-1 py-1 rounded-lg hover:bg-blue-700 flex items-center justify-center"
                            >
                                <p>Select Users</p>
                            </button>
                        )}
                        {selectedUser ? (
                            <div className="flex flex-col h-full">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xl md:text-2xl font-semibold ">
                                        Buddie: {selectedUser.fullName}
                                    </h2>
                                    <button
                                        onClick={() => setIsSidebarOpen(true)}
                                        className="hidden md:block text-blue-500 hover:text-blue-700"
                                    >
                                        <HiMenu className="w-6 h-6" />
                                    </button>
                                </div>
                                <div className="flex-1 overflow-y-auto bg-gray-900 p-4 rounded-lg border border-gray-600 mb-4">
                                    {messages.map((msg, index) => (
                                        <div
                                            key={index}
                                            className={`mb-2 ${msg.sender === loggedInUserId ? 'text-right' : 'text-left'}`}
                                        >
                                            <div
                                                className={`inline-block p-3 rounded-lg ${msg.sender === loggedInUserId
                                                    ? 'bg-blue-600'
                                                    : 'bg-gray-700'
                                                    }`}
                                            >
                                                <p className="text-sm md:text-base">{msg.content}</p>
                                                <small className="text-xs md:text-sm">
                                                    {new Date(msg.sentAt).toLocaleTimeString()}
                                                </small>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center space-x-3 mt-auto">
                                    <input
                                        type="text"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Type a message"
                                        className="w-full p-3 border border-gray-600 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <button
                                        onClick={handleMessageSend}
                                        className="p-3 bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center h-full text-gray-400">
                                No users to Chat !!
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
