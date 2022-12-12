import Button from "@mui/material/Button";
import {useSelector} from "react-redux";
import {questionsSelector} from "../../../Store/Questions/config";
import {useEffect, useRef, useState} from "react";
import {QuizQuestions} from "../Molecules/QuizQuestions";
import  '../style.css'
import {Header} from "../../Header/Header";

export const Quiz  = ()=>{
    const listOfTheQuiz = useSelector(questionsSelector.quizQuestionsSelector)
    const [page, setPage] =useState(0)
    const ref = useRef()
    const [status, setStatus] =useState()
   const PAGE_CONSTANT =1
    const handleSetPage = ()=>{
        setPage(prev=>prev+1)
    }

    const  handlePreviousPAge =()=>{
        setPage(prev=>prev-1)
    }

    const handleSetAnswerStatus =(isStatusTrue) =>{
        setStatus(isStatusTrue);
    }
 useEffect(()=>{
     const checkSelectedAnswer =()=>{
         if(status){
              setTimeout(()=>{

ref.current.style.background ='green'


             },1000)

}

     }
     return ()=> clearTimeout(checkSelectedAnswer)

 },[])
    console.log(status, ref, "ssss" )
    return (
    <div>
        <Header/>
        <h1>Question {page+PAGE_CONSTANT} of {listOfTheQuiz.length}</h1>
        <div>
            {listOfTheQuiz[page].answers.map(item=>{
                return(
                    <div >
                        <QuizQuestions
                            list={listOfTheQuiz}
                            item={item}
                            handleSetAnswerStatus={handleSetAnswerStatus}
                            status={status}
                            ref={ref}
                        />
                    </div>
                )
            })}
        </div>
        <div className='button_block'>
            <Button style={ page+ PAGE_CONSTANT == listOfTheQuiz.length ? { display:'none'}:{display:"block"}}  onClick={handleSetPage}>Next</Button>
            <Button  style={ page == 0 ? { display:'none'}:{display:"block"}}onClick={handlePreviousPAge}>Previous</Button>
        </div>

    </div>
    )
}