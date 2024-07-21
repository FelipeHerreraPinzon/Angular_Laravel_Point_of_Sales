import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../category';
  
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  
  categories: Category[] = [];
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public categoryService: CategoryService) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.categoryService.getAll().subscribe((data: Category[])=>{
      this.categories = data;
      console.log(this.categories);
    })  
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  deletePost(id:number){
    this.categoryService.delete(id).subscribe(res => {
         this.categories = this.categories.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }
  
}