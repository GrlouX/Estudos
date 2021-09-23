console.log("Questão 1")

ConvTemp = function (TempC) {
	TempF = 1.8 * TempC + 32;
	return TempF
}

console.log(ConvTemp(23))

document.getElementById("converter").onclick = function () {
	document.getElementById("temp_fahr").innerHTML = ConvTemp(document.getElementById("temp_celsius").value);
}


console.log("Questão 2")

var ano_ini = 1930;
var ano_fin = 2018;

var ano = ano_ini;

document.getElementById("anos_copa").innerHTML  = "";

while (ano <= ano_fin) {
	console.log(ano);
	document.getElementById("anos_copa").innerHTML += "<li>" + ano + "</li>";
	ano += 4
}

console.log("Questão 3")

document.getElementById("calcular").onclick = function() {

var n1 = parseFloat(document.getElementById("nota1").value);
var n2 = parseFloat(document.getElementById("nota2").value);
var faltas = parseFloat(document.getElementById("n_faltas").value);

var media = (n1 + n2) / 2;

if (faltas <= 6 && media >= 6.5) {
		console.log(media)
		document.getElementById("result").innerHTML = "Aluno aprovado.";
} else if (faltas > 6 && media >= 6.5) {
		document.getElementById("result").innerHTML = "Aluno reprovado por infrequência.";
} else if (faltas <= 6 && media < 6.5) {
		document.getElementById("result").innerHTML = "Aluno reprovado por média insuficiente.";
} else {
		document.getElementById("result").innerHTML = "Aluno reprovado por infrequência e média insuficiente.";
}

}

console.log("Questão 4")

var vendas_cursos = [

        {
            'aluno': 'Emmanuel Gomes',
            'data': '10/06/2018',
            'valor': 34.99,
            'reembolso': null
            
        },

        {
            'aluno': 'Carla Dias',
            'data': '10/06/2018',
            'valor': 29.99,
            'reembolso': null
            
        },

        {
            'aluno': 'Rafael Marques',
            'data': '11/06/2018',
            'valor': 39.99,
            'reembolso': '13/06/2018'
            
        },

        {
            'aluno': 'Maria Isabel Pereira',
            'data': '11/06/2018',
            'valor': 29.99,
            'reembolso': null
            
        },

        {
            'aluno': 'Andre Luis Silva',
            'data': '12/06/2018',
            'valor': 34.99,
            'reembolso': null
            
        }
    
    ];

var tot_vendas = 0;

document.getElementById("vendas_cursos").innerHTML = "";

for (b = 0; b < vendas_cursos.length; b++) {

	if (vendas_cursos[b].reembolso == null) {

		tot_vendas += vendas_cursos[b].valor;

		var linhaHTML = "";
		linhaHTML += "<tr>";
		linhaHTML += "<td>" + vendas_cursos[b].aluno + "</td>";
		linhaHTML += "<td>" + vendas_cursos[b].data + "</td>";
		linhaHTML += "<td>" + vendas_cursos[b].valor + "</td>";
		linhaHTML += "</tr>";

		document.getElementById("vendas_cursos").innerHTML += linhaHTML;
	}
}

document.getElementById("total_vendas").innerHTML = tot_vendas