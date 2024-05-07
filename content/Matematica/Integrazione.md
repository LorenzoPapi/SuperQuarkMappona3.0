# Integrale indefinito
## Utilizzo
L'integrazione indefinita è l'operazione inversa della [[Derivata|derivata]].

---
## Definizione e proprietà
Data una funzione $f(x): D \to \mathbb{R}$ detta **integranda**, si definisce **integrale indefinito di $f(x)$ in $dx$** la **classe di funzioni**, dette **primitive**, tali che la loro **derivata** coincide con $f(x)$ per ogni $x$ in $D$. In simboli:
$$
\int f(x) dx = \left\{F(x) :F'(x) = f(x) \space \forall x \in D\right\}
$$Tale insieme può o essere vuoto o contenere almeno un elemento:
- se è vuoto, allora la **funzione non è integrabile in D**;
- altrimenti esiste almeno una primitiva e, per il secondo corollario al teorema di Lagrange, ve ne sono **infinite** che differiscono da $F(x)$ per una **costante additiva $c$**
L'integrale indefinito è un **operatore lineare**.
Il motivo della scrittura convoluta può essere riassunto in pochi step: ricordando che il [[Derivata#Differenziale|differenziale]] di una funzione $F(x)$ è $dF = F'(x) * dx$, definendo l'integrale come l'operazione inversa si ha che $\int (dF) = \int(F'(x) * dx) = F(x) + c$ e definendo $f(x) = F'(x) \space \forall x \in D$ si ottiene la scrittura solita.
I metodi di risoluzione di un integrale sono molteplici:
- **ricorso agli integrali immediati**: si cerca di ricondurre l'integrale ad uno immediato, ovvero un integrale che rappresenta la derivata di una funzione elementare
- **sostituzione**: si cerca di semplificare l'integrale riconoscendo una funzione e la sua derivata all'interno dello stesso integrale; in questo modo si risolve l'integrale:
$$
\int f(x) dx = \int f(g(t))\cdot g'(t)dt
$$
* **integrazione per parti**: viene spesso utilizzato con due classi di funzioni diverse moltiplicate tra loro; una si considera come **fattore finito** e l'altra come **fattore differenziale**, ovvero come **derivata di un'altra funzione**:
$$
\int u(x)\space dv = u(x)\cdot v(x) - \int v(x)\space du
$$
---
# Integrale definito
## Utilizzo
Viene utilizzata per **calcolare misure** di **archi, aree e volumi**.

---
## Definizione e proprietà
Data una funzione 