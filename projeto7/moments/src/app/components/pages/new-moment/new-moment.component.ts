import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {

  btnText: string = "Adicionar";

  constructor(
    private momentService: MomentService,
    private messageService: MessagesService,
    private router: Router,
  ) {}

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

    (await this.momentService.createMoment(formData)).subscribe();

    this.messageService.add("Momento adicionado com sucesso!"); // Implementa conteúdo na mensagem de feedback
    
    this.router.navigate(['/']); // Redirect para home
  }

}