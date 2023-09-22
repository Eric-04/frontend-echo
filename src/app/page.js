"use client";
import Image from 'next/image'
import { useState } from "react";
import Board from './components/board'
import './components/style.css'

export default function Home() {
  return (
    <div className = "Home">
      <Board></Board>
    </div>
  )
}
