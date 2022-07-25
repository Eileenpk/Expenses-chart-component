
// get the data from data.json
fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        graphData(data)
    })

// inserts the data into the graph, styles it, and inserts tool tip 
const graphData = data => {
    const graphContainer = document.querySelector('.week-graph-container')

    let graphContainerHtml = ''
    // loops over data
    for (let i = 0; i < 7; i++) {
        
        graphContainerHtml += `      
        <section class="weekday-container">
            <span class="hovertext" data-hover="$${data[i].amount}">   
            
            <div class="${data[i].day} ${currentDay(data[i].day)} day bar" style="height:calc(${data[i].amount}px * 2.5 );"></div>
            </span>
            <p class="day">${data[i].day}</p>
      </section>
        `
      
    }
    graphContainer.innerHTML = graphContainerHtml
    // currentDay(data)
}

// target the day of the week it is currently and change the color of the bar

const currentDay = data => {
    const curDate = new Date
    let currday = curDate.getDay()
    
    switch(currday) {
        case 0:
            currday = 'sun' 
            break;
        case 1:
            currday = 'mon' 
            break;
        case 2:
            currday = 'tue'
            break;
        case 3:
            currday = 'wed' 
            break;
        case 4: currday = 'thu' 
            break;
        case 5:
            currday = 'fri' 
            break;
        case 6:
            currday = 'sat' 
            break;
        default:
    }

        if(currday == data) {
            return 'current-day'
        }
        else {
            return
        }
    }

