import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpruntService } from '../services/emprunt.service';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-emprunt',
  templateUrl: './emprunt.component.html',
  styleUrls: ['./emprunt.component.css']
})
export class EmpruntComponent implements OnInit {

  empruntForm: FormGroup;
  livreId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private EmpruntService: EmpruntService,
    private livreService: LivreService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.empruntForm = this.fb.group({
      Prenom: ['', [Validators.required]],
      Nom: ['', [Validators.required]],
      DateE: ['', Validators.required],
      DateR: ['', Validators.required],
    }, { validators: this.dateRetourAfterDateEmprunt });
  }

  // Custom validator to check if DateR >= DateE
  dateRetourAfterDateEmprunt(group: FormGroup) {
    const dateE = group.get('DateE')?.value;
    const dateR = group.get('DateR')?.value;
    if (dateE && dateR) {
      return new Date(dateR) >= new Date(dateE) ? null : { dateInvalid: true };
    }
    return null;
  }

  ngOnInit(): void {
    // Get the selected book id from query params
    this.livreId = this.route.snapshot.queryParamMap.get('livreId');
  }

  onSubmit(): void {
    if (this.empruntForm.valid && this.livreId) {
      const empruntData = {
        ...this.empruntForm.value,
        livre: { id: this.livreId }
      };
      this.EmpruntService.addEmprunt(empruntData).subscribe(() => {
        // Update book availability to false
        this.livreService.updateLivreDisponibilite(this.livreId!, false).subscribe(() => {
          this.router.navigate(['ListeLivres']);
        });
      });
    }
  }
}
