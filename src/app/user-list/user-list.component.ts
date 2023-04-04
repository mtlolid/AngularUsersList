import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  public login!: string;
  public password!: string;
  public email!: string;
  public dataArr: Array<any> = [];
  public editCheck = false;
  public editIndex!: number;

  regCheck(): any {
    const check = [false, false, false];

    const regLogin = /^[A-Za-z]{4,16}$/;
    const regPass = /^[\w\_\-\.]{4,16}$/;
    const regEmail = /^\S*@\S*$/;

    regLogin.test(this.login) ? check[0] = true : false;
    regPass.test(this.password) ? check[1] = true : false;
    regEmail.test(this.email) ? check[2] = true : false;

    if (check.every(elem => elem == true)) {
      return true;
    };
  };

  addUser(): void {
  
    if (this.regCheck()) {
      let obj = {
        login: this.login,
        password: this.password,
        email: this.email
      };

      this.dataArr.push(obj);

      this.login = '';
      this.password = '';
      this.email = '';
    };

  };

  deleteUser(index: number): void {
    this.dataArr.splice(index, 1);
  };

  editUser(index: number): void{
    this.editCheck = true;
    this.editIndex = index;

    this.login = this.dataArr[index].login;
    this.password = this.dataArr[index].password;
    this.email = this.dataArr[index].email;
  };

  saveEdit(): void{
    if(this.regCheck()){
      this.dataArr[this.editIndex].login = this.login;
      this.dataArr[this.editIndex].password = this.password;
      this.dataArr[this.editIndex].email = this.email;

      this.login = '';
      this.password = '';
      this.email = '';

      this.editCheck = false;
    }
  }

}
