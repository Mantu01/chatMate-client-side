import React from 'react';
import ChatImage from '../assets/heartImg.png';
// import BoyImage from '../assets/2.jpg';
// import GirlImage from '../assets/1.jpg';

const About = () => {
    return (

        <div className="bg-black text-white ">

            <section className="h-[75vh] w-full bg-gradient-to-r from-purple-500 to-pink-500 py-16 px-4 text-center flex justify-center items-center flex-row">
                <div className='h-[60vh] w-full flex flex-col justify-center item-center'>
                    <h2 className="text-4xl font-bold mb-4">chatMate Platform for Random Text and File Sharing</h2>
                    <p className="text-lg mb-8">ChatMate is an application that uses the most advanced artificial intelligence technology. It can mimic human conversation and provide you with a natural and authentic dialogue experience. It also has a strong self-learning ability and can truly create content on its own.</p>
                </div>
                <div className='flex flex-row w-full justify-center'>
                  
                    <img className='h-52 w-52' src={ChatImage} alt="askf" />
                    <img className='h-52 w-52' src={ChatImage} alt="askf" />
                    <img className='h-52 w-52' src={ChatImage} alt="askf" />
                </div>

            </section>


            <section className="py-16 px-4 flex flex-col justify-center items-center ">
                <h2 className="text-3xl font-bold mb-8">Our Journey</h2>
                <div className="flex  flex-col justify-center items-center gap-10">
                    <div className="flex  items-center gap-6">
                        <img src="https://via.placeholder.com/200" alt="Vision" className="rounded-full w -48 h-48 mb-4" />
                        <div>
                            <h3 className="text-xl font-semibold">The Vision</h3>
                            <p className="text-center w-[700px]">ChatMate is an application that uses the most advanced artificial intelligence technology. It can mimic human conversation and provide you with a natural and authentic dialogue experience. It also has a strong self-learning ability and can truly create content on its own.</p>
                        </div>
                    </div>
                    <div className="flex  items-center gap-6">
                        <div>
                            <h3 className="text-xl font-semibold">The Vision</h3>
                            <p className="text-center w-[700px]">ChatMate is an application that uses the most advanced artificial intelligence technology. It can mimic human conversation and provide you with a natural and authentic dialogue experience. It also has a strong self-learning ability and can truly create content on its own.</p>
                        </div>
                        <img src="https://via.placeholder.com/200" alt="Vision" className="rounded-full w -48 h-48 mb-4" />
                    </div>
                    <div className="flex  items-center gap-6">
                        <img src="https://via.placeholder.com/200" alt="Vision" className="rounded-full w -48 h-48 mb-4" />
                        <div>
                            <h3 className="text-xl font-semibold">The Vision</h3>
                            <p className="text-center w-[700px]">ChatMate is an application that uses the most advanced artificial intelligence technology. It can mimic human conversation and provide you with a natural and authentic dialogue experience. It also has a strong self-learning ability and can truly create content on its own.</p>
                        </div>
                    </div>
                    <div className="flex  items-center gap-6">
                        <div>
                            <h3 className="text-xl font-semibold">The Vision</h3>
                            <p className="text-center w-[700px]">ChatMate is an application that uses the most advanced artificial intelligence technology. It can mimic human conversation and provide you with a natural and authentic dialogue experience. It also has a strong self-learning ability and can truly create content on its own.</p>
                        </div>
                        <img src="https://via.placeholder.com/200" alt="Vision" className="rounded-full w -48 h-48 mb-4" />
                    </div>
                    <div className="flex  items-center gap-6">
                        <img src="https://via.placeholder.com/200" alt="Vision" className="rounded-full w -48 h-48 mb-4" />
                        <div>
                            <h3 className="text-xl font-semibold">The Vision</h3>
                            <p className="text-center w-[700px]">ChatMate is an application that uses the most advanced artificial intelligence technology. It can mimic human conversation and provide you with a natural and authentic dialogue experience. It also has a strong self-learning ability and can truly create content on its own.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-6 px-4 flex flex-col justify-center items-center ">
                <div class="bg-black text-white py-16">
                    <div class="container mx-auto text-center">
                        <h2 class="text-3xl font-bold mb-4">Our Impact</h2>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-20">
                            <div class="bg-gray-800 rounded-lg p-6 text-center">
                                <h3 class="text-2xl font-bold mb-2">5M+</h3>
                                <p class="text-lg">Monthly Active Users</p>
                            </div>
                            <div class="bg-gray-800 rounded-lg p-6 text-center">
                                <h3 class="text-2xl font-bold mb-2">19M+</h3>
                                <p class="text-lg">Video Chats per Week</p>
                            </div>
                            <div class="bg-gray-800 rounded-lg p-6 text-center">
                                <h3 class="text-2xl font-bold mb-2">10M+</h3>
                                <p class="text-lg">Messages Sent Daily</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div>

    )
}

export default About
