let jsondata;
const app = {
    data() {
        return {
            material:jsondata,
            areabutton:[],
            show:'all',
        }
    },
    created(){
        this.material.forEach(area =>{
            if(this.areabutton.indexOf(area.sarea) === -1){
                this.areabutton.push(area.sarea)
            }}
        )
    },
    methods: {
        showarea(e){
                this.show = e.target.textContent;
        },
        showall(){
                this.show = 'all';
        },
        areamaps(lat,lng){
            return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
        }
    },
}
fetch("https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json")
.then(res=>res.json())
.then(result=>{
    jsondata = result;
    Vue.createApp(app).mount("#app");
})