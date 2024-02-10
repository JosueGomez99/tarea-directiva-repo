import { Component, OnInit } from '@angular/core';
import { IonHeader,IonToolbar,IonTitle,IonContent,IonList,IonItem,IonThumbnail } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-segundo-caso',
  templateUrl: './segundo-caso.component.html',
  styleUrls: ['./segundo-caso.component.scss'],
  standalone:true,
  imports:[IonHeader,IonToolbar,IonTitle,IonContent,IonList,IonItem,IonThumbnail,CommonModule,]
})
export class SegundoCasoComponent implements OnInit {
  animalImages: string[] = ['https://www.todoservivo.com/wp-content/uploads/2023/10/Descubre-donde-vive-el-leon_-su-habitat-alimentacion-y-caracteristicas-del-rey-de-la-118155722.jpg', 'https://s1.eestatic.com/2023/07/29/ciencia/782681856_235038553_1706x960.jpg', 'https://files.worldwildlife.org/wwfcmsprod/images/African_Elephant_Walking/story_carousel/3arzfzjsw0_Medium_WW1113482.jpg', 'https://t2.ea.ltmcdn.com/es/posts/7/2/5/lengua_de_la_jirafa_color_tamano_y_curiosidades_26527_600.webp', 'https://t1.ea.ltmcdn.com/es/posts/3/4/1/10_curiosidades_del_oso_panda_22143_600.webp'];
  
  constructor() { }

  ngOnInit() {
  }
}
