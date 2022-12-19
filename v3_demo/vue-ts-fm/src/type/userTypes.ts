export interface IUserInit {
  id: number
  nickName: string
  role: RoleInit[]
  roles: RoleInit[]
  userName: string
}

interface RoleInit {
  role: number
  roleName: string
}

interface ISelectData {
  nickName: string
  role: number
}
interface IRoleList {
  authority: number
  roleId: number
  roleName: string
}

export class UserData {
  selectData: ISelectData = {
    nickName: '',
    role: 0,
  }
  userList: IUserInit[] = [] // 用户信息列表
  roleList: IRoleList[] = [] // 角色信息列表
}
