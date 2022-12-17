var i = 0;
var month = [];
var icu = [];
var maternity = [];
var oncology = [];
var cardiology = [];
var other = [];

document.getElementById("lastEdit").innerText = moment(document.lastModified).format("YYYY-MM-DD");


if(localStorage.getItem("ls_month") === null){
 	tempObj = {};
	console.log("No ls_month found")
}

else{
	pastmonth = localStorage.getItem("ls_month");
	tempObj = JSON.parse(pastmonth);

	console.log("tempObj: ");
	console.log(tempObj);
	month = Object.keys(tempObj);
    i = month.length;

    for (let j = 0; j < month.length; j++) {
        icu[j] = tempObj[month[j]].icu;
        maternity[j] = tempObj[month[j]].maternity;
        oncology[j] = tempObj[month[j]].oncology;
        cardiology[j] = tempObj[month[j]].cardiology;
        other[j] = tempObj[month[j]].other;
    }

    console.log(
        "arrays - " + 
        "icu: " + icu +
        "maternity: " + maternity +
        "oncology: " + oncology +
        "cardiology: " + cardiology +
        "other: " + other
    );
    
	console.log("Found:"+ i +" Entries in local storage");
}

function newValues(){
    console.log("--- new object ---");

    console.log("i: " + i);
    if(month.indexOf(document.getElementById("Month").value.toString()) !== -1){
        alert("Sorry, no repeated months allowed");
    }
    else{	

        month[i] = (document.getElementById("Month").value).toString();
        icu[i] = Number(document.getElementById("ICU").value);
        maternity[i] = Number(document.getElementById("Maternity").value);
        oncology[i] = Number(document.getElementById("Oncology").value);
        cardiology[i] = Number(document.getElementById("Cardiology").value);
        other[i] = Number(document.getElementById("Other").value);


        var monthInput = (document.getElementById("Month").value).toString();

        var tempData = {
            "icu" : Number(document.getElementById("ICU").value),
            "maternity" : Number(document.getElementById("Maternity").value),
            "oncology" : Number(document.getElementById("Oncology").value),
            "cardiology" : Number(document.getElementById("Cardiology").value),
            "other" : Number(document.getElementById("Other").value)
        };
        
        console.log(month[i] + " = {icu: " + icu[i] + 
        ", maternity: " + maternity[i] + 
        ", oncology: " + oncology[i] + 
        ", cardiology: " + cardiology[i] + 
        ", other: " + other[i] + "} at position " + i);

        tempObj[monthInput] = tempData;
        
        JSONObj = JSON.stringify(tempObj);
        localStorage.setItem("ls_month", JSONObj);  
        
        document.getElementById("successMsg").innerHTML = "Your entry for " + month[i]+ " has been successfully added to the chart below.";

        i++;
    }
}

function reChart(){

	if(month.length > 0){
		Highcharts.chart('chart1', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Monthly Number of Patients by Departments'
            },
            xAxis: {
                categories: month
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total Number of Patients'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: ( // theme
                            Highcharts.defaultOptions.title.style &&
                            Highcharts.defaultOptions.title.style.color
                        ) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -30,
                verticalAlign: 'top',
                y: 25,
                floating: true,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            series: [{
                name: 'ICU',
                data: icu,
                color: '#D46552'
            }, {
                name: 'Maternity',
                data: maternity,
                color: '#4192B6'
            }, {
                name: 'Oncology',
                data: oncology,
                color: '#8B9983'
            }, {
                name: 'Cardiology',
                data: cardiology,
                color: '#F6BD60'
            }, {
                name: 'Other',
                data: other,
                color: '#544644'
            }]
        });
	} 
}