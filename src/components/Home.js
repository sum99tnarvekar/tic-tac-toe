import React from 'react';
import {Link} from "react-router-dom";
import Banner from '../assets/banner.png';

export default function Home() {
    return (

        <div className="game-info-container container p-6">
            <div className="flex flex-col items-center">
                <img src={Banner} alt="banneriamge" className="w-[22.25rem] h-[4.25rem]"/>
                <h1 className="text-shadow mt-5 md:text-3xl text-md font-bold text-white teko-text mb-4">The classic game of strategy and fun.</h1>
            </div>
            <div className={`mt-[25px] lg:w-[75%] w-full md:mx-auto mx-0`}>
                <div
                    className="intro-container bg-inherit p-6 border-dotted border-4 border-white h-[300px] overflow-y-scroll scroll-smooth">
                    <h2 className="teko-text mb-3 text-white text-center text-3xl font-normal font-teko">Introduction</h2>
                    <p className="text-justify md:text-center text-gray-800 font-bold leading-relaxed teko-text">
                        Tic-Tac-Toe is a classic two-player game played on a 3x3 grid. The game is simple yet requires
                        strategy and foresight.
                        The goal is to be the first player to align three of your marks (X or O) in a row, column, or
                        diagonal.
                    </p>
                    <h2 className="teko-text mt-[40px] mb-3 text-white text-center text-3xl font-normal teko-text">Game
                        Rules</h2>
                    <ol className="list-decimal list-inside text-gray-800 space-y-2 text-center font-bold leading-relaxed teko-text">
                        <li>Players take turns placing either an "X" or an "O" in an empty cell on the grid.</li>
                        <li>The first player to get three of their marks in a horizontal, vertical, or diagonal line
                            wins the game.
                        </li>
                        <li>If all nine squares are filled and no player has won, the game ends in a draw.</li>
                    </ol>
                    <h2 className="teko-text mt-[40px] mb-3 text-white text-center text-3xl font-normal teko-text">Strategy
                        Tips</h2>
                    <ul className="list-disc list-inside text-gray-800 space-y-2 text-center font-bold leading-relaxed teko-text">
                        <li>Start by taking a corner or the center square for better chances of winning.</li>
                        <li>Block your opponent's moves while trying to complete your own row or column.</li>
                        <li>Watch out for opportunities to win diagonally.</li>
                    </ul>
                </div>
                <div className={`flex justify-center`}>
                    <Link to="/gamedashboard">
                        <button className="shadow-md bg-white mt-10 teko-text text-2xl text-[#80e5ff] py-2 px-7 hover:text-3xl transition-all duration-300 ease-in-out hover:scale-105">
                        Play
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}