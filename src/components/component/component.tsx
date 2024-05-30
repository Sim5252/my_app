/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/EfiKRGw1sDe
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
export function Component() {
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Game Master</h1>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600">Save</button>
          <button className="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600">Load</button>
        </div>
      </header>
      <div className="flex-1 grid grid-cols-3 gap-6 p-6">
        <div className="bg-gray-800 rounded-md p-6 space-y-4">
          <h2 className="text-xl font-bold">Game Settings</h2>
          <div className="space-y-2">
            <label className="block" htmlFor="game-title">
              Game Title
            </label>
            <input
              className="bg-gray-700 rounded-md px-4 py-2 w-full"
              id="game-title"
              placeholder="Enter game title"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <label className="block" htmlFor="game-description">
              Game Description
            </label>
            <textarea
              className="bg-gray-700 rounded-md px-4 py-2 w-full"
              id="game-description"
              placeholder="Enter game description"
              rows={3}
            />
          </div>
          <div className="space-y-2">
            <label className="block" htmlFor="game-rules">
              Game Rules
            </label>
            <textarea
              className="bg-gray-700 rounded-md px-4 py-2 w-full"
              id="game-rules"
              placeholder="Enter game rules"
              rows={3}
            />
          </div>
          <div className="space-y-2">
            <label className="block" htmlFor="game-difficulty">
              Game Difficulty
            </label>
            <select className="bg-gray-700 rounded-md px-4 py-2 w-full" id="game-difficulty">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>
        <div className="bg-gray-800 rounded-md p-6 space-y-4">
          <h2 className="text-xl font-bold">Character Management</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">Player 1</h3>
                <p className="text-gray-400">Wizard</p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600">Edit</button>
                <button className="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600">Delete</button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">Player 2</h3>
                <p className="text-gray-400">Warrior</p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600">Edit</button>
                <button className="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600">Delete</button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">Player 3</h3>
                <p className="text-gray-400">Rogue</p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600">Edit</button>
                <button className="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600">Delete</button>
              </div>
            </div>
          </div>
          <button className="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600">Add Character</button>
        </div>
        <div className="bg-gray-800 rounded-md p-6 space-y-4">
          <h2 className="text-xl font-bold">Game Control</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold">Current Round</h3>
              <p className="text-gray-400">Round 5</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Turn Order</h3>
              <ul className="space-y-2">
                <li>Player 1 (Wizard)</li>
                <li>Player 2 (Warrior)</li>
                <li>Player 3 (Rogue)</li>
              </ul>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600">Previous Round</button>
              <button className="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600">Next Round</button>
              <button className="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600">End Game</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
