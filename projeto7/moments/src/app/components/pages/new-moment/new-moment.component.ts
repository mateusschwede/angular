import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {

  btnText: string = "Adicionar";

  constructor(private momentService: MomentService) { }

  ngOnInit(): void {
  }

  async createHandler(moment: Moment) {
    console.log('Enviado'); // Enviará form para service (Não será via JSON, será via FormData)

    const formData = new FormData();
    formData.append("title", moment.title);
    formData.append("description", moment.description);
    
    if (moment.image) {
      formData.append("image", moment.image);
    }

    await this.momentService.createMoment(formData).subscribe();

    // Exibir msg (Feedback da operação)
    // Redirect (Para a página home)
  }

}
