const styles = ()=>({
    modal:{
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        position: 'absolute',
        width:400,
        backgroundColor:'white',
        outline:'none'
    },
    header:{
        backgroundColor:'#f73378',
        color:'white',
        padding:20,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
    },
    title:{
        color:'white',
        fontWeight:700,
        textTransform: 'capitalize'
    },
    icon:{
        cursor:'pointer',
        fontSize:30
    },
    content:{
        padding:20
    },
    textField:{
        witdh:'100%'
    }
});
export default styles;