import '../style.css'

export const QuizQuestions =(props)=>{

    const { item, handleSetAnswerStatus,ref} =props



    return (
<>
    <div  ref={ref} className='quizBlock'
          onClick={()=>handleSetAnswerStatus(item.status)}>
        <h3 style={{textAlign:"center"}} >{item.answer}</h3  >
    </div>

</>
    )
}