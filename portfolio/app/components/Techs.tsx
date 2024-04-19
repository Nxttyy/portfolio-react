import django from "../../public/django.svg";
import Image from "next/image";
import react from "../../public/react-2.svg";
import fast_api from "../../public/fastapi-1.svg";
import linux from "../../public/linux-tux.svg";
import flask from "../../public/flask.svg";

function Techs() {
  return (
    <div className="flex w-full justify-around gap-5 m-10">
      <div className=" rounded-sm border border-3 w-32 h-32 flex justify-center items-center" style={{'border-color':'#E84023'}}>
        <Image src={django} alt="django" className="w-20 h-20 fill-white m-5" />
      </div>

      <div className="rounded-sm border border-3 w-32 h-32 flex justify-center items-center" style={{'border-color':'#E84023'}}>
        <Image src={fast_api} alt="django" className="w-20 h-20 fill-white" />
      </div>

      <div className="rounded-sm border border-3 w-32 h-32 flex justify-center items-center" style={{'border-color':'#E84023'}}>
        <Image src={linux} alt="django" className="w-20 h-20 fill-white" />
      </div>

      <div className="rounded-sm border border-3 w-32 h-32 flex justify-center items-center" style={{'border-color':'#E84023'}}>
        <Image src={react} alt="django" className="w-20 h-20 fill-white" />
      </div>

      <div className="rounded-sm border border-3 w-32 h-32 flex justify-center items-center" style={{'border-color':'#E84023'}}>
        <Image src={flask} alt="django" className="w-20 h-20 fill-white" />
      </div>
    </div>
  );
}

export default Techs;

// techs: Django, flask, fastapi, react, linux, python-telegram-bot
