console.log('Questão 1')

var num1 = parseInt(document.getElementById("num_1").innerHTML);

var num2 = parseInt(document.getElementById("num_2").innerHTML);

var soma = num1 + num2;

document.getElementById("resultado").innerHTML = '<strong>' + soma + '</strong>';


console.log('Questão 2')

function ConvTemp(TempC) {
 var TempF = 1.8 * TempC + 32;
 return TempF
}

tempF = ConvTemp(document.getElementById("caixa_azul").innerHTML);

document.getElementById("caixa_amarela").innerHTML = tempF;


console.log('Questão 3')

    var grupos = [ 
        [ "João" , "Maria" ],
        [ "Pedro" , "Joana", "André", "Júlio" ],
        [ "Carolina" , "Helena", "Marcelo" ]
    ]; 

    var grupos_modif = grupos.slice(-2,);

  	grupos_modif.push(["Mariana", "Felipe", "Carla"]);

	console.log(grupos_modif)  


console.log('Questão 4')

    var curso = {
        'titulo': "Aprenda programação em Python",
        'categoria': ['programação', 'tecnologia', 'python'],
        'n_aval_5_estrelas': 420,
        'n_aval_4_estrelas': 80,
        'n_aval_3_estrelas': 33,
        'n_aval_2_estrelas': 20,
        'n_aval_1_estrela': 4,
        'TotalAval': function () {
        	var n_aval = this.n_aval_5_estrelas + this.n_aval_4_estrelas 
        		+ this.n_aval_3_estrelas + this.n_aval_2_estrelas + this.n_aval_1_estrela;
        	return n_aval
        },
        'MediaAval': function () {
        	var mc_aval = (5 * this.n_aval_5_estrelas + 4 * this.n_aval_4_estrelas
        		+ 3 * this.n_aval_3_estrelas + 2 * this.n_aval_2_estrelas
        		+ this.n_aval_1_estrela) /
        	 (this.n_aval_5_estrelas + this.n_aval_4_estrelas
        	  + this.n_aval_3_estrelas + this.n_aval_2_estrelas + this.n_aval_1_estrela);
        	return mc_aval
        }
    }

    document.getElementById("total_aval").innerHTML = curso.TotalAval();

    document.getElementById("media_aval").innerHTML = curso.MediaAval().toFixed(2);


console.log('Questão 5')
  

cadastro = {
	'nome': 'Pedro',
	'sobrenome': 'Gomes',
	'email': 'pedrogomes@gmail.com'
}

function PgCadastro(cadastro) {
	var PgForm = '<div class="tableBox">' + '<br><br>'
	+ '<table>' + '<br>' + '<tr>' + '<th>Nome Completo</th>'
	+ '<br>' + '<th>E-mail</th>' + '</tr>' + '<tr>'
	+ '<td>' + cadastro.nome + cadastro.sobrenome + '</td>'
	+ '<td>' + cadastro.email + '</td>' + '<br>' + '</tr>'
	+ '<br>' + '</table>' + '<br><br>' + '</div>';
 	return PgForm
}

document.getElementById("tabela").innerHTML = PgCadastro(cadastro)