

export const StyleWrapper =({children})=>{
    return(
        <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
            {children}
        </div>
    )
}