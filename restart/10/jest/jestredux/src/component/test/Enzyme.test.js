const enzyme = require('enzyme')
const React = require('react')
const Star = ({ selected = false, onClick = f => f }) =>
    <div className={(selected) ? "star selected" : "star"} onClick={onClick}>
    </div>

// function Star(selected) {
//     if (!selected) {
//         selected = false
//     }
//     return (<div className={(selected) ? "star selected" : "star"} onClick={onClick}>
//     </div>)
// }

describe("<Star /> UI Component", () => {
    it("renders default star", () => {
        expect(enzyme.shallow(<Star />)
            .find('div.star')
            .length()
        ).toBe(1)
    })

    it("renders selected stars", () => {
        expect(
            enzyme.shallow(<Star selected={true} />)
                .find('div.selected.star')
                .length
        ).toBe(1)
    })
})