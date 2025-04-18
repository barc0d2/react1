import ProfileCard from './components/ProfileCard'
import './App.css'
const ProfileData = [{
  name: "전진영", 
  age: 25,
  isOnline: true
},{
  name: "dlwlrma", 
  age: 32,
  isOnline: false
},{
  name: "전진영", 
  age: 25,
  isOnline: true
},{
  name: "전진영", 
  age: 25,
  isOnline: false
},{
  name: "전진영", 
  age: 25,
  isOnline: false
},
]


function App() {
  
  return (
    <>
      <ProfileCard profiles={ProfileData}/>
    </>
  )
}

export default App
