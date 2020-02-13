var app = new Vue ({
	el: '#app',
	data:{
		titulo: 'lista de tareas',
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
	},
	methods:{
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