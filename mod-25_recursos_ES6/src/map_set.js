let meuMap = new Map();
meuMap.set("nome", "franklin");
meuMap.set("stack", "html, css, js");

console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size)

console.log(meuMap.has("sobrenome"))

//meuMap.clear()

console.log(meuMap.size)

for (let valor of meuMap.values()) {
    console.log(valor);
}
for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

meuMap.delete("nome");

console.log(meuMap)


///SET

const cpfs = new Set();

cpfs.add('79531335800')
cpfs.add('75759190822')
cpfs.add('98208756849')

console.log(cpfs)

console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach((valor) => {
    console.log(valor)
})

const array = ['Franklin Fer', 'Jose Paulo', 'Maria Isabel', 'Luana', 'Luana', 'Franklin Fer']

const arrayComoSet = new Set([...array])

const araySemDuplicidade = [...arrayComoSet]

console.log(arrayComoSet)
console.log(araySemDuplicidade)

