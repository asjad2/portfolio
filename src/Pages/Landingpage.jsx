import Header from "../Components/Header";
import Features from "../Components/Features";
import Steps from "../Components/Steps";
import Topheader from "../Components/Topheader";
import ContactUs from "../Components/ContactUs";
import Services from "./../Components/Services";
const Landingpage = (props) => {
  return (
    <div className={`container  space-y-12`}>
      <Topheader bgcolor={props.bgcolor} txtcolor={props.txtcolor}  headtxtcolor={props.headtxtcolor}/>
      <Header bgcolor={props.bgcolor} txtcolor={props.txtcolor}  headtxtcolor={props.headtxtcolor}/>
      <Features bgcolor={props.bgcolor} txtcolor={props.txtcolor}  headtxtcolor={props.headtxtcolor}/>
      <Steps bgcolor={props.bgcolor} txtcolor={props.txtcolor}  headtxtcolor={props.headtxtcolor}/>
      <Services bgcolor={props.bgcolor} txtcolor={props.txtcolor}  headtxtcolor={props.headtxtcolor}/>
      <ContactUs bgcolor={props.bgcolor} txtcolor={props.txtcolor}  headtxtcolor={props.headtxtcolor} wordCounter={props.wordCounter} setwordCounter={props.setwordCounter} letterCounter={props.letterCounter} setletterCounter={props.setletterCounter}/>
    </div>
  );
};

export default Landingpage;
