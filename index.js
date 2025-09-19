let homeScore = 0
let guestScore = 0

const homeBoard = document.querySelector(".home.board")
const guestBoard = document.querySelector(".guest.board")

const homeBtns = document.querySelector(".home.btns")
const guestBtns = document.querySelector(".guest.btns")

Array.from(homeBtns.children).forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const newHomeScore = homeScore + (index + 1)
        homeBoard.textContent = newHomeScore
        homeScore = newHomeScore
    })
})

Array.from(guestBtns.children).forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const newGuestScore = guestScore + (index + 1)
        guestBoard.textContent = newGuestScore
        guestScore = newGuestScore
    })
})
