let heads = 0
let tails = 0
    
    document.getElementById('flip').addEventListener('click', () => {
        
        let flippedHeads = Math.random() < 0.5

        if (flippedHeads) {
            
            document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
            document.getElementById('message').textContent = 'You Flipped Heads!'
            heads += 1
        }
        else {
            
            document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'
            document.getElementById('message').textContent = 'You Flipped Tails!'
            tails += 1
        }

        let total = heads + tails
 
        let percentHeads = 0
        let percentTails = 0

        if (total > 0) {
            
            percentHeads = Math.round((heads / total) * 100)
            percentTails = Math.round((tails / total) * 100)
        }

        document.getElementById('heads').textContent = heads
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tails
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })

    document.getElementById('clear').addEventListener('click', function () {
        
        heads = 0
        tails = 0

        document.getElementById('message').textContent = 'Let\'s Get Rolling!'

        let total = heads + tails

        let percentHeads = 0
        let percentTails = 0

        if (total > 0) {
            
            percentHeads = Math.round((heads / total) * 100)
            percentTails = Math.round((tails / total) * 100)
        }

        document.getElementById('heads').textContent = heads
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tails
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })