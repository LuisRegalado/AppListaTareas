
var	data = {
		tareas: [
			{
				texto: 'aprende viu.js',
				terminada: false
			},
			{
				texto: 'aprende angular',
				terminada: false
			},
			{
				texto: 'aprende fut',
				terminada: false
			},
		],
		nuevaTarea: ''
	}
Vue.component('titulo',{
	template: '<h2> {{titulo}}</h2>',
	data: function (){
		return {titulo: '--lista de tareas-- '}
	}
})
Vue.component ('nueva-tarea',{
	template: `
		<div class="input-group">
			<input type="text" placeholder="Nueva tarea" v-model="nuevaTarea" class="form-control" @keyup.enter="agregartarea">
			<span class="input-group-btn">
				<button type="button" @click="agregartarea" class="btn btn-primary">Agregar</button>
			</span>
		</div>`,
		data: function (){
			return data;
		},
		methods: {
			agregartarea: function(){
				var texto = this.nuevaTarea.trim();
				if(texto){
					this.tareas.push({
						texto:texto,
						terminada: false
					})
				}
				this.nuevaTarea='';
			}
		}
})
Vue.component ('lista-de-tareas',{
	template:`
		<ul class="list-group">
			<li v-for="(tarea, indice) of tareas" class="list-group-item" v-bind:class="{terminada: tarea.terminada}">
				{{tarea.texto}}
				<span class="pull-right">
					<button type="button" class="btn btn-success btn-xs glyphicon glyphicon-ok" @click="tarea.terminada=true"></button>
					<button type="button" class="btn btn-danger btn-xs glyphicon glyphicon-remove" @click="borrar(indice)"></button>
				</span>
			</li>
		</ul>
	`,
	data: function(){
		return data;
	},
	methods: {
		borrar: function(indice){
			this.tareas.splice(indice,1);
		}
	}
})
var app = new Vue ({
	el: '#app',
	data: data,
	methods:{
	}
})