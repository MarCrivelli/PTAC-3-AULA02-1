export default function Mapa(){
    return(
        <div>
           <iframe
                class="mapa"
                id="gmap_canvas"
                src={"https://maps.google.com/maps?q=Nova%20Andradina%20+IFMS+&t=&z=13&ie=UTF8&iwloc=&output=embed"}
                frameborder="0" scrolling="no"
                marginheight="0"
                marginwidth="0">
            </iframe>
        </div>
    )
}