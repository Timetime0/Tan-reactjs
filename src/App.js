import "./App.css";
import BaiTap1 from "./components/BaiTap1/DivComponent/BaiTap1";
import BaiTap1Home from "./components/BaiTap1/BaiTap1Home/BaiTap1Home";
import ShowRoomCard from "./components/ShowRoomcCar.jsx/ShowRoomCard";
import Parent from "./components/props/Parent";


function App() {
  return (
    <div>
      <BaiTap1/>
      <BaiTap1Home/>
      <ShowRoomCard/>
      <Parent/>
    </div>
  );
}

export default App;

//jsx: react app sử dụng tool jsx để viết (có thể vieert js và html)
