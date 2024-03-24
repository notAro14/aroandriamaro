---
title: Quick tip to reduce React component re-render
description: Component re-rendering is not a problem per se, but we can easily avoid it in some cases
pubDate: 2022-04-09
author: Aro Andriamaro
image:
  url: /covers/cover-16-9.webp
  alt: Desk with computer desktop
tags: ["react", "rerender"]
---

To begin with, [re-render is not a big issue, slow render is](https://kentcdodds.com/blog/fix-the-slow-render-before-you-fix-the-re-render). But if we can reduce re-renders easily, let's not private ourselves.

## Contrived example of a re-render

Let's take a look at an App component that renders a list of suggested Gym club nearby and an input form that allows users to search for workout routine.

```jsx
import {useState} from 'react'

const App = () => {
  const [search, setSearch] = useState('')
  const [workoutList, setWorkoutList] = useState([])


  return (
    <main>
      <SuggestedGymClub />

      <h1>Looking for a workout routine ?<h1>
      <form onSubmit={async e => {
        e.preventDefault()
        const res = await fetch('/api/routine', {
          method: 'POST',
          body: JSON.stringify({search})
        })
        const data = await res.json()
        setWorkoutList(data)
      }}>
        <label htmlFor='search'>Workout name</label>
        <input
          placeholder='Full body'
          value={search}
          name='search'
          id='search'
        />
        <button>Research</button>
      </form>

      <ul>
        {
          workoutList.map(workout => {
            return <li key={workout.id}>{workout.name}</li>
          })
        }
      </ul>
    </main>
  )
}
```

The problem with this code is that every time a user searches for a workout, _SuggestedGymClub_ re-renders.

If _SuggestedGymClub_ is a big and expensive component to render, it can cause bad performance for the app. So why does it re-render anyway ?

Because _App_ component re-renders whenever _search_ or _workoutList_ change. When a parent component re-renders, all of its children re-renders as well, no matter what.

## The solution to prevent re-renders

In our simple case, the solution is pretty simple. If we want _SuggestedGymClub_ component not to re-render, we have to prevent _App_ from re-rendering.

For that, we can extract all the logic of workout searching into its own component.

```diff
import {useState} from 'react'

+ const SearchForWorkoutRoutines = () => {
+   const [search, setSearch] = useState('')
+   const [workoutList, setWorkoutList] = useState([])
+   return (
+     <h1>Looking for a workout routine ?<h1>
+     <form onSubmit={async e => {
+       e.preventDefault()
+       const res = await fetch('/api/routine', {
+         method: 'POST',
+         body: JSON.stringify({search})
+       })
+       const data = await res.json()
+       setWorkoutList(data)
+     }}>
+       <label htmlFor='search'>Workout name</label>
+       <input
+         placeholder='Full body'
+         value={search}
+         name='search'
+         id='search'
+       />
+       <button>Research</button>
+     </form>
+     <ul>
+       {
+         workoutList.map(workout => {
+           return <li key={workout.id}>{workout.name}</li>
+         })
+       }
+     </ul>
+   )
+ }

const App = () => {
- const [search, setSearch] = useState('')
- const [workoutList, setWorkoutList] = useState([])
  return (
    <main>
    <SuggestedGymClub />
+   <SearchForWorkoutRoutines />
-      <h1>Looking for a workout routine ?<h1>
-      <form onSubmit={async e => {
-        e.preventDefault()
-        const res = await fetch('/api/routine', {
-          method: 'POST',
-          body: JSON.stringify({search})
-        })
-        const data = await res.json()
-        setWorkoutList(data)
-      }}>
-        <label htmlFor='search'>Workout name</label>
-        <input
-          placeholder='Full body'
-          value={search}
-          name='search'
-          id='search'
-        />
-        <button>Research</button>
-      </form>
-      <ul>
-        {
-          workoutList.map(workout => {
-            return <li key={workout.id}>{workout.name}</li>
-          })
-        }
-      </ul>
    </main>
  )
}
```

For experienced React developers, this seems pretty obvious. But it can be easily overlooked when you write big component and you loose track of what state is shared or not.

So next time you notice performance issue in your app, I think looking for this simple state location issue first can save you a lot of debugging.
