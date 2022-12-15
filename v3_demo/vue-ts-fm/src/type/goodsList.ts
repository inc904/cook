export interface ListInt {
  userID: number
  id: number
  title: string
  introduce: string
}

interface selectDataInt {
  title: string
  desc: string
  page: number
  count: number
  pagesize: number
}

export class InitData {
  selectData: selectDataInt = {
    title: '',
    desc: '',
    page: 1,
    count: 0,
    pagesize: 10,
  }
  tableList: ListInt[] = []
}
