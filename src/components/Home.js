import React, {useState,useEffect} from 'react';
import lodash from 'lodash'
import { withRouter,Link } from "react-router-dom";


export default withRouter((props)=>{
    console.log(props)
    return (
        <>
            <div class="mt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="my-2">
                    <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">A -</h2>
                    <ul class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4">
                        <li onClick={()=>props.history.push("/animals")} class="col-span-1 cursor-pointer flex shadow-sm rounded-md">
                            <div class="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm leading-5 font-medium rounded-l-md">
                                A
                            </div>
                            <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                <div class="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                    <a href="#" class="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Animals</a>
                                    <p class="text-gray-500">16 Members</p>
                                </div>
                                
                            </div>
                        </li>
                        <li  onClick={()=>props.history.push("/animes")} class="col-span-1 cursor-pointer flex shadow-sm rounded-md">
                            <div class="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm leading-5 font-medium rounded-l-md">
                                A
                            </div>
                            <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                <div class="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                    <a href="#" class="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Animes</a>
                                    <p class="text-gray-500">12 Members</p>
                                </div>
                                
                            </div>
                        </li>
                        <li  onClick={()=>props.history.push("/astrologicalSigns")} class="col-span-1 cursor-pointer flex shadow-sm rounded-md">
                            <div class="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm leading-5 font-medium rounded-l-md">
                                A
                            </div>
                            <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                <div class="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                    <a href="#" class="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Astrological signs</a>
                                    <p class="text-gray-500">16 Members</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="my-2">
                    <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">C -</h2>
                    <ul class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4">
                        <li onClick={()=>props.history.push("/cars")} class="col-span-1 cursor-pointer flex shadow-sm rounded-md">
                            <div class="flex-shrink-0 flex items-center justify-center w-16 bg-orange-600 text-white text-sm leading-5 font-medium rounded-l-md">
                                C
                            </div>
                            <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                <div class="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                    <a href="#" class="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Cars</a>
                                    <p class="text-gray-500">16 Members</p>
                                </div>
                            </div>
                        </li>
                        <li  onClick={()=>props.history.push("/cities")} class="col-span-1 cursor-pointer flex shadow-sm rounded-md">
                            <div class="flex-shrink-0 flex items-center justify-center w-16 bg-orange-600 text-white text-sm leading-5 font-medium rounded-l-md">
                                C
                            </div>
                            <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                <div class="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                    <a href="#" class="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Cities</a>
                                    <p class="text-gray-500">12 Members</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="my-2">
                    <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">D -</h2>
                    <ul class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4">
                        <li  onClick={()=>props.history.push("/destinations")} class="col-span-1 cursor-pointer flex shadow-sm rounded-md">
                            <div class="flex-shrink-0 flex items-center justify-center w-16 bg-purple-600 text-white text-sm leading-5 font-medium rounded-l-md">
                                D
                            </div>
                            <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                <div class="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                    <a href="#" class="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Destinations</a>
                                    <p class="text-gray-500">16 Members</p>
                                </div>
                            </div>
                        </li>
                        <li onClick={()=>props.history.push("/drinks")} class="col-span-1 cursor-pointer flex shadow-sm rounded-md">
                            <div class="flex-shrink-0 flex items-center justify-center w-16 bg-purple-600 text-white text-sm leading-5 font-medium rounded-l-md">
                                D
                            </div>
                            <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                <div class="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                    <a href="#" class="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Drinks</a>
                                    <p class="text-gray-500">12 Members</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="my-2">
                    <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">F -</h2>
                    <ul class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4">
                        <li onClick={()=>props.history.push("/foods")} class="col-span-1 cursor-pointer flex shadow-sm rounded-md">
                            <div class="flex-shrink-0 flex items-center justify-center w-16 bg-red-600 text-white text-sm leading-5 font-medium rounded-l-md">
                                F
                            </div>
                            <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                <div class="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                    <a href="#" class="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Foods</a>
                                    <p class="text-gray-500">16 Members</p>
                                </div>
                            </div>
                        </li>
                        <li onClick={()=>props.history.push("/filmTypes")} class="col-span-1 cursor-pointer flex shadow-sm rounded-md">
                            <div class="flex-shrink-0 flex items-center justify-center w-16 bg-red-600 text-white text-sm leading-5 font-medium rounded-l-md">
                                F
                            </div>
                            <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                <div class="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                    <a href="#" class="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Film types</a>
                                    <p class="text-gray-500">12 Members</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="my-2">
                    <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">M -</h2>
                    <ul class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4">
                        <li onClick={()=>props.history.push("/musicTypes")} class="col-span-1 cursor-pointer flex shadow-sm rounded-md">
                            <div class="flex-shrink-0 flex items-center justify-center w-16 bg-green-600 text-white text-sm leading-5 font-medium rounded-l-md">
                                M
                            </div>
                            <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                <div class="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                    <a href="#" class="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Music types</a>
                                    <p class="text-gray-500">16 Members</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="my-2">
                    <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">R -</h2>
                    <ul class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4">
                        <li onClick={()=>props.history.push("/regions")} class="col-span-1 cursor-pointer flex shadow-sm rounded-md">
                            <div class="flex-shrink-0 flex items-center justify-center w-16 bg-blue-600 text-white text-sm leading-5 font-medium rounded-l-md">
                                R
                            </div>
                            <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                <div class="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                    <a href="#" class="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Regions</a>
                                    <p class="text-gray-500">16 Members</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="my-2">
                    <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">S -</h2>
                    <ul class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4">
                        <li onClick={()=>props.history.push("/sports")} class="col-span-1 cursor-pointer flex shadow-sm rounded-md">
                            <div class="flex-shrink-0 flex items-center justify-center w-16 bg-gray-600 text-white text-sm leading-5 font-medium rounded-l-md">
                                S
                            </div>
                            <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                <div class="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                    <a href="#" class="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Sports</a>
                                    <p class="text-gray-500">16 Members</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="my-2">
                    <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">U -</h2>
                    <ul class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4">
                        <li onClick={()=>props.history.push("/users")} class="col-span-1 cursor-pointer flex shadow-sm rounded-md">
                            <div class="flex-shrink-0 flex items-center justify-center w-16 bg-yellow-600 text-white text-sm leading-5 font-medium rounded-l-md">
                                U
                            </div>
                            <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                <div class="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                    <a href="#" class="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Users</a>
                                    <p class="text-gray-500">16 Members</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="my-2">
                    <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">V -</h2>
                    <ul class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4">
                        <li onClick={()=>props.history.push("/videoGames")} class="col-span-1 cursor-pointer flex shadow-sm rounded-md">
                            <div class="flex-shrink-0 flex items-center justify-center w-16 bg-indigo-600 text-white text-sm leading-5 font-medium rounded-l-md">
                                V
                            </div>
                            <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                <div class="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                    <a href="#" class="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Vidéos games</a>
                                    <p class="text-gray-500">16 Members</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
})