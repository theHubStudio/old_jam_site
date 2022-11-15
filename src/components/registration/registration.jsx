import { useState } from "react";
import Overlay from "../overlay/overlay";
import "./registration-styles/registration.css";
import { Container } from "react-bootstrap";
import kempir from "../../images/turkic/kempir.gif";

const formFields = [
    {
        type: "text",
        placeholder: "название команды",
        name: "entry.622377088",
    },
    {
        type: "text",
        placeholder: "учебное заведение",
        name: "entry.966331574",
    },
    {
        type: "email",
        placeholder: "электронная почта",
        name: "entry.1842236906",
    },
    {
        type: "tel",
        placeholder: "номер телефона",
        name: "entry.1419582377",
    },
    {
        type: "text",
        placeholder: "капитан",
        name: "entry.1601897725",
    },
    {
        type: "text",
        placeholder: "участник",
        name: "entry.1688673403",
    },
    {
        type: "text",
        placeholder: "участник",
        name: "entry.1712183872",
    },
    {
        type: "text",
        placeholder: "участник",
        name: "entry.752129752",
    },
    {
        type: "text",
        placeholder: "участник",
        name: "entry.1555555961",
    },
 

]


const Form = () =>{

    const [formData, setFormData] = useState({
        "entry.622377088": "",
        "entry.966331574": "",
        "entry.1842236906": "",
        "entry.1419582377": "",
        "entry.1601897725": "",
        "entry.1688673403": "",
        "entry.1712183872": "",
        "entry.752129752": "",
        "entry.1555555961": "",
    });
   
    const handleInputData = (input) => (e) => {
        const { value } = e.target;
    
        setFormData((prevState) => ({
          ...prevState,
          [input]: value
        }));
    };

    async function handleSubmit(e) {
        e.preventDefault()
        let url = `https://docs.google.com/forms/u/1/d/e/1FAIpQLSdxBG_we1ZXQ0yBwIs14s3CoAEgNkON1tx0ZpWmU20BjDmLkQ/formResponse?entry.622377088=${formData["entry.622377088"]}&entry.966331574=${formData["entry.966331574"]}&entry.1842236906=${formData["entry.1842236906"]}&entry.1419582377=${formData["entry.1419582377"]}&entry.1601897725=${formData["entry.1601897725"]}&entry.1688673403=${formData["entry.1688673403"]}&entry.1712183872=${formData["entry.1712183872"]}&entry.752129752=${formData["entry.752129752"]}&entry.1555555961=${formData["entry.1555555961"]}`;
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then();
    }
    return(
        <form method="post"  
            className="reg-form" id="reg-form" 
            onSubmit={handleSubmit} 
        >
            {formFields.map((input, index)=>
                <input 
                    type={input.type} 
                    placeholder={input.placeholder} 
                    key={index} 
                    name={input.name}
                    value={formData[input.name]}
                    className="reg-control"
                    onChange={handleInputData(input.name)}
                    required
                />
            
            )}
        <input type="submit" value="Регистрация" className="form-btns reg-btn"/>
    </form>

    )
}
const Registration = ({handleShowText, show}) =>{
  
    const [submit, setSubmit] = useState(false);
    return(
        <section className="registration page">
            <Container className="wrapper">
                <div className="registration-content">
                    <div className="general-text reg-text">
                        <h2 className="general-title">Регистрация на SUMGJ22</h2>
                        <p className="general-subtitle">Регистрация команды</p>
                    </div>
                    <div className="form">
                        <h3 className="form-title">
                            Начните свой путь в геймдев с нами на GameJam
                        </h3>
                        <button className="form-btns start-btn" onClick={handleShowText}>Начать</button>
                    </div>
                   
                </div>
            </Container>
            <Overlay 
                handleShowText={handleShowText} 
                show={show}
                content={<Form/>} 
            />
            <img src={kempir} className="kempir gif-img" alt="kempir"/>
        </section>
    )
}
export default Registration;