type StudentType = {
    name: string
    age: number
    isName: boolean
    someArray: Array<SomeArrayType>
    vnutri: VnutriType
}
type VnutriType = {
    kakoita: string,
    vnutrivnutri: Chtotooo
}
type Chtotooo = {

    chtoto: number

}
type SomeArrayType = {
    jopa: string,
    odin: number
}
export const student: StudentType = {
    name: "s",
    age: 1,
    isName: true,
    someArray: [
        {
            jopa: "dsfsd",
            odin: 1
        }
    ],
    vnutri: {
        kakoita: "ddas",
        vnutrivnutri: {
            chtoto: 10
        }
    }
}