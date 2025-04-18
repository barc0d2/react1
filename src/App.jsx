import ProfileCard from './components/ProfileCard'
import './App.css'
const ProfileData = [{
  name: "전진영", 
  age: 25,
  isOnline: true
},{
  name: "김현아", 
  age: 24,
  isOnline: true
},{
  name: "이주찬", 
  age: 26,
  isOnline: true
},{
  name: "황인태", 
  age: 26,
  isOnline: false
},{
  name: "이지은", 
  age: 32,
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
