export default{
    up(){

    },
    down(size){
        const sizes={
            xs:"350px",
            sm:"500px",
            md:"991px",
            lg:"1199px",

        }
        return `@media(max-width: ${sizes[size]})`
    }
}