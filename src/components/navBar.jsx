import React from 'react'

export default function Navbar() {
    return (
        <div class="nav-container">
            <h2 class="title" onclick="window.location.reload()">
                DSA visualizer
            </h2>
            <div class="navbar" id="navbar">
                <span class="options">
                    <select name="select sort algorithm" id="algo_menu" class="algo-menu">
                        <option value="0">Choose algorithm</option>
                        <option value="1">Bubble Sort</option>
                        <option value="2">Selection Sort</option>
                        <option value="3">Insertion Sort</option>
                        <option value="4">Merge Sort</option>
                        <option value="5">Quick Sort</option>
                    </select>
                </span>
                <span class="options">
                    <select name="speed of visualization" id="speed_menu" class="speed-menu">
                        <option value="0.5">0.50x</option>
                        <option value="0.75">0.75x</option>
                        <option value="1" selected>1.00x</option>
                        <option value="1.5">2.00x</option>
                        <option value="2">4.00x</option>
                    </select>
                </span>
                <p class="start">Data structure</p>
                <p class="icon"><i class="fa fa-bars"></i></p>
            </div>
        </div>
    )
}
