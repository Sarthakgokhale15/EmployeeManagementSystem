Frontend-Rect Native
Backend-Mongo DB , Node JS, Express JS


## Run Locally

```bash
  git clone https://github.com/Sarthakgokhale15/EmployeeManagementSystem
```

Run backend 

```bash
  cd Backend
  npm run dev
```

Start the emulator

```bash
  npm run ios
  npm run android
```

## API Reference

#### View all items

```http
  GET http://localhost:3000/employees
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| None | None | Returns JSON data of all employees |

#### View item

```http
  GET http://localhost:3000/employees/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Integer` | **Required** Id of employee to fetch |

#### Create item

```http
  POST http://localhost:3000/employees/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Integer`  | **Required** Id of employee to fetch |
| `email`   | `string` |  Id of employee to fetch |
| `contactNumber`      | `string` |  contact Number of  employee to fetch |
| `firstName`      | `string` |  first name  of employee to fetch |
| `lastName`      | `string` |  last name of employee to fetch |
| `Empid`      | `Integer` |  Empid of employee to fetch |



#### Update item

```http
  Patch http://localhost:3000/employees/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Integer`  | **Required** Id of employee to update |
| `email`   | `string` |  Id of employee to update |
| `contactNumber`      | `string` |  contact Number of  employee to update |
| `firstName`      | `string` |  first name  of employee to update |
| `lastName`      | `string` |  last name of employee to update |
| `Empid`      | `Integer` |  Empid of employee to update |









Demo Link1-
https://viitac-my.sharepoint.com/:v:/g/personal/sarthak_21910984_viit_ac_in/ETYKUOkBw_NDnr-xjH6dLCABDQ1pVn_hp9gQGXnLaKz11w?e=pw03Vy&wdLOR=c19FCADA0-278B-D74F-A663-FDF7D2B98334

Demo Link2-
https://drive.google.com/file/d/1hUlnmlf5pIamAtfR9sOwc7KD0WVsKn-f/view?usp=share_link


<img width="363" alt="temp1" src="https://user-images.githubusercontent.com/64783930/213959326-2971a749-2892-4b4b-8018-4f56e78c9a17.png">
<img width="363" alt="temp2" src="https://user-images.githubusercontent.com/64783930/213959332-3ce126da-1f60-49cc-8826-188fd28ea6c6.png">
<img width="363" alt="temp3" src="https://user-images.githubusercontent.com/64783930/213959336-c7cd7bf4-0c9f-49d8-8559-b89021abe34b.png">
<img width="363" alt="temp4" src="https://user-images.githubusercontent.com/64783930/213959338-82b85971-970e-4aeb-baf3-3aa7f55eadd1.png">
