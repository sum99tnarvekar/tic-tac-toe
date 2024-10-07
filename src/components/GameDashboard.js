import React, { useState } from 'react';
import Reset from '../assets/reset.svg';
import banner from '../assets/banner.png';
import circle from '../assets/circle-svgrepo-com.svg';
import cross from '../assets/cross-svgrepo-com.svg';
import {Link} from "react-router-dom";

export default function GameDashboard() {
    const numberOfBoxes = 9; // Number of toe boxes
    const [clickedBoxes, setClickedBoxes] = useState(Array(numberOfBoxes).fill(null)); // Track state of each box: null, 'circle', or 'cross'
    const [isNext, setIsNext] = useState(true); // Track whose turn it is (circle or cross)
    const [hoveredBoxes, setHoveredBoxes] = useState(Array(numberOfBoxes).fill(false)); // Track hover state for each box
    const [winner, setWinner] = useState(null); // Track winner
    console.log("winner is " , winner);

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const checkWinner = (boxes) => {
        console.log("boxes", boxes);
        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            console.log(combo, a, b, c);
            if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
                return boxes[a]; // Return the winner ('circle' or 'cross')
            }
        }
        return null;
    };

    const handleMouseEnter = (index) => {
        setHoveredBoxes((prev) => {
            const newHoveredBoxes = [...prev];
            newHoveredBoxes[index] = true; // Set the hovered box to true
            return newHoveredBoxes;
        });
    };

    const handleMouseLeave = (index) => {
        setHoveredBoxes((prev) => {
            const newHoveredBoxes = [...prev];
            newHoveredBoxes[index] = false; // Set the hovered box to false
            return newHoveredBoxes;
        });
    };

    const handleClick = (index) => {
        if (clickedBoxes[index] || winner) return;
        const newClickedBoxes = [...clickedBoxes];
        newClickedBoxes[index] = isNext ? 'circle' : 'cross'; // Set the image based on whose turn it is
        setClickedBoxes(newClickedBoxes);
        setIsNext(!isNext); // Toggle the turn

        const gameWinner = checkWinner(newClickedBoxes);
        if (gameWinner) {
            setWinner(gameWinner); // Set the winner
        }
    };

    const HoverStyle = (isHovered, isClicked) => ({
        backgroundImage: isClicked ? 'none' : (isHovered ? `url(${isNext ? circle : cross})` : 'none'), // Show image only if not clicked
        backgroundRepeat: 'no-repeat',
        backgroundSize: isNext ? '40px 40px' : '75px 75px',
        backgroundPosition: 'center',
        transition: 'background-image 0.3s ease',
    });

    const resetGame = () => {
        setClickedBoxes(Array(numberOfBoxes).fill(null));
        setIsNext(true);
        setWinner(null);
        setHoveredBoxes(Array(numberOfBoxes).fill(false));
    };

    return (
        <div className="game-dashboard container p-6">
            <div className="flex justify-center">
                <Link to="/"><img src={banner} alt="banner" className="w-[400px] h-[100px]" /></Link>
            </div>
            <div>
                {winner && (
                    <div className="text-shadow mt-5 md:text-3xl text-md font-bold text-white teko-text mb-4">
                        <p className="text-center">
                            {winner ? `Winner: ${winner === 'circle' ? 'O Player' : 'X Player'}` : "Game's Draw"}
                        </p>
                    </div>
                )}
            </div>
            <div className="flex flex-wrap xl:w-[40%] md:w-[60%] w-full mt-10 mx-auto justify-center">
                {Array.from({ length: numberOfBoxes }).map((_, index) => (
                    <div
                        onMouseEnter={() => handleMouseEnter(index)} // Pass the index
                        onMouseLeave={() => handleMouseLeave(index)} // Pass the index
                        style={HoverStyle(hoveredBoxes[index], clickedBoxes[index])} // Use both hover and click states
                        onClick={() => handleClick(index)} // Ensure function is passed as a callback
                        key={index}
                        className={`toe-boxes transition-all transition-duration-300 ${clickedBoxes[index] ? '' : 'hover:bg-black hover:bg-opacity-50'}`}
                    >
                        {clickedBoxes[index] && (
                            <div className={`toe-boxes-innerbody flex items-center justify-center`}>
                                <img src={clickedBoxes[index] === 'circle' ? circle : cross} alt={clickedBoxes[index]} style={{ width: clickedBoxes[index] === 'circle' ? '40px' : '75px', height: clickedBoxes[index] === 'circle' ? '40px' : '75px' }} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className={` xl:w-[31%] lg:[w-47%] md:w-[53%] w-full mx-auto flex justify-between items-center gap-2`}>
                <div>
                    <button className="reset mx-2 mt-10" onClick={()=>resetGame()}>
                        <img src={Reset} alt="reset" className="w-10 h-10" />
                    </button>
                </div>
                <button onClick={() => resetGame()}
                    className="mx-2 shadow-md bg-white mt-10 teko-text text-2xl text-[#80e5ff] py-2 px-7 hover:text-3xl transition-all duration-300 ease-in-out hover:scale-105">
                    Play Again!
                </button>
            </div>
        </div>
    );
}
