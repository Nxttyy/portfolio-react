import django from "../../public/django.svg";
import Image from "next/image";
import react from "../../public/react-2.svg";
import fast_api from "../../public/fastapi-1.svg";
import linux from "../../public/linux-tux.svg";
import flask from "../../public/flask.svg";

function Techs() {
  return (
    <div className="hidden lg:inline "><p className="text-start mx-10 my-10 font-extrabold text-5xl text-white">Technologies</p>
    <div className="flex w-full justify-around gap-5 m-10 border-2 p-5" style={{ borderColor: "#E84023" }}>
      
      <div className=" rounded-sm border border-3 w-32 h-32 flex justify-center items-center" >
        <Image src={django} alt="django" className="w-20 h-20 fill-white m-5" />
      </div>

      <div className="rounded-sm border border-3 w-32 h-32 flex justify-center items-center" style={{}}>
        <Image src={fast_api} alt="Fast-api" className="w-20 h-20 fill-white" />
      </div>

      <div className="rounded-sm border border-3 w-32 h-32 flex justify-center items-center" style={{}}>
        <Image src={linux} alt="linux" className="w-20 h-20 fill-white" />
      </div>

      <div className="rounded-sm border border-3 w-32 h-32 flex justify-center items-center" style={{}}>
        <Image src={react} alt="react" className="w-20 h-20 fill-white" />
      </div>

      <div className="rounded-sm border border-3 w-32 h-32 flex justify-center items-center" style={{}}>
        <Image src={flask} alt="flask" className="w-20 h-20 fill-white" />
      </div>
    </div></div>
    
  );
}

export default Techs;

// techs: Django, flask, fastapi, react, linux, python-telegram-bot