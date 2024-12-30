interface Usuario {
    nombre: string;
    edad: number;
    id: string;
}

let usuario: Usuario = {
    nombre: 'Mr Beats',
    edad: 23,
    id: '12'
};

console.log(`${usuario.nombre} es un YouTuber`);

// Transformemos este codigo de TS en JS: $ npx tsc hello.ts