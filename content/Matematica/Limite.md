# Utilizzo
Data una funzione $f: D \to \mathbb{R}$ e un punto $x_0 \in \mathbb{R}$ non necessariamente incluso nel dominio della stessa, l'operatore **limite** ci permette di studiare il **comportamento della funzione** in un **intorno di $x_0$**.
In particolare, permettono di trovare gli **asintoti** di una funzione, cioè delle **rette alle quali la funzione si avvicina indefinitamente**. Tali rette vanno cercate calcolando i **limiti agli estremi del dominio** della funzione e possono essere **orizzontali**, **verticali** o **obliqui**.

---
# Definizione e teoremi
## Premesse
L'intorno $I_{x_{0}}$ è un qualsiasi **intervallo contenente $x_0$**: viene indicato spesso con $I_{x_{0}}(\delta_{1},\delta_{2})$ ed equivale a $(x_{0} - \delta_{1},x_{0}+\delta_{2})$ con $\delta_{1},\delta_{2} \in \mathbb{R^+}$. Se $\delta_{1}=\delta_{2}$ si presenta un **intorno circolare di raggio $r=\delta_{1}=\delta_{2}$** detto $I_{x_{0}}(r)$ che può essere riscritto come
$$
I_{x_{0}}(r) = (x_{0}-r,x_{0}+r) = \{x \in \mathbb{R} : x_{0}-r<x<x_{0}+r\} = \{x \in \mathbb{R}: |x-x_{0}|<r\}
$$
Vi sono anche **intorni destri ($I_{x_{0}}^+$) e sinistri ($I_{x_{0}}^-$)** che considerano solo metà del rispettivo intorno completo; i destri comprendono i valori **maggiori** di quello dato, i sinistri quelli **minori**.
L'intorno può essere definito anche per i simboli di $\pm\infty$:
$$
I_{+\infty}(r) = \{x\in\mathbb{R}: x > r\}
$$
$$
I_{-\infty}(r) = \{x\in\mathbb{R}: x < r\}
$$
Definisco $\mathbb{\overline R} =: \mathbb{R} \cup \{ -\infty, +\infty \}$; d'ora in poi considererò ogni intorno, per semplicità, come circolare.
Si definiscono:
$$
x_{0} \text{ punto di accumulazione per D} \iff \forall I_{x_{0}}: \exists d\neq x_{0} \in D : d \in I_{x_{0}}
$$
$$
x_{0} \in D\text{ punto isolato} \iff \exists I_{x_{0}}: D \cap I_{x_{0}} = \emptyset
$$
---
## Definizione
La definizione più generale di limite è la seguente: **il limite per $x$ che *tende* ad un valore $\alpha$, con $\alpha \in \mathbb{\overline R}$ di una funzione $f(x)$ equivale a $l$ con $l\in\mathbb{\overline R}$  se e solo se per ogni intorno $I_{l}(\epsilon)$ esiste un intorno $I_{\alpha}(\delta)$ tale che per ogni $x$ nel dominio e nell'intorno di $\alpha$, escluso $\alpha$, si ha che $f(x)$ è all'interno dell'intorno di $\alpha$**. In simboli:
$$
\lim_{ x \to \alpha }f(x) = l \iff (\forall I_{l} \space \exists I_{\alpha} :\forall x\in (I_{\alpha} \cap D - \{\alpha\}) \implies f(x) \in I_{l})
$$
Tale simbologia sarà utilizzata per il resto della nota.

---
## Classificazione
Distinguendo tra valori finiti e infiniti di $a$ ed $l$ si hanno quattro tipologie di limite principali:
* limite **finito ($l \in \mathbb{R}$)** al **finito ($a \in \mathbb{R}$)**
* limite **finito ($l \in \mathbb{R}$)** all'**infinito ($a \in \{ -\infty,+\infty \}$)**
* limite **infinito ($l \in \{ -\infty,+\infty \}$)** al **finito ($a \in \mathbb{R}$)**
* limite **infinito ($l \in \{ -\infty,+\infty \}$)** all'**infinito ($a \in \{ -\infty,+\infty \}$)**

A seconda del tipo di intorno, ritroviamo poi i limiti **destri ($\alpha^+$) e sinistri ($\alpha^-$)**, nonché i risultati per **eccesso ($l^+$) e difetto ($l^-$)**.

---
## Teoremi sui limiti
Si possono dimostrare tre teoremi relativi ai limiti:
- teorema di **unicità**: in forma ridotta, afferma che il **risultato del limite è unico**. Nella struttura ipotesi-tesi:
$$
\left(\exists\lim_{ x \to \alpha }f(x) = l_{1} \land \exists\lim_{ x \to \alpha }f(x) = l_{2} \right) \implies l_{1}\equiv l_{2}
$$
- teorema di **permanenza del segno**: 
$$
\exists \lim_{ x \to \alpha }f(x) = l\neq 0 \implies \exists I_{\alpha}:\forall x \in (D \cap I_{\alpha} -\{\alpha\}) : f(x)\cdot l > 0
$$
- teorema del **confronto**:
$$
\forall x \in \left(D\cap I_{\alpha}- \{\alpha\}\right): g(x)\leq f(x)\leq h(x) \land \exists \lim_{ x \to \alpha }g(x)=\lim_{ x \to \alpha }h(x)=l \implies \exists \lim_{ x \to x_{0} }f(x)=l
$$

---
# Continuità e algebra dei limiti
Una funzione definita in un punto $x_0$ del dominio si dice **continua in $x_0$** quando
$$
\forall I_{f(x_{0})} \space \exists I_{x_{0}} :\forall x\in (I_{x_{0}} \cap D) \implies f(x) \in I_{f(x_{0})}
$$
Tale condizione si riduce ai seguenti due casi:
- se $x_0$ è punto isolato, è automaticamente continua in $x_0$;
- altrimenti, $\text{continua in }x_{0}\iff \displaystyle \lim_{ x \to x_{0} }f(x) = f(x_{0})$.

Sapendo che una funzione è continua in un punto, possiamo dunque calcolare il suo limite in quel punto semplicemente valutando lì la funzione.
Valgono in generale le seguenti regole:
* $\displaystyle \lim_{ x \to \alpha}[a\cdot f(x)\pm b\cdot g(x)] = a\cdot\lim_{ x \to \alpha }f(x) \pm b\cdot\lim_{ x \to \alpha }g(x)$, proprietà che fa del limite un operatore **lineare**
* $\displaystyle \lim_{ x \to \alpha}[f(x)\cdot g(x)] = \lim_{ x \to \alpha }f(x) \cdot \lim_{ x \to \alpha }g(x)$
* $\displaystyle \lim_{ x \to \alpha}[f(x)^{g(x)}] = \lim_{ x \to \alpha }f(x) ^{\displaystyle \lim_{ x \to \alpha }g(x)}$
* $\displaystyle \lim_{ x \to \alpha}f(g(x)) = f(\lim_{ x \to \alpha }g(x))$ se $f$ **definita** nel risultato del limite di $g$
Vi sono dei casi in cui il risultato immediato, ottenuto spesso tramite sostituzione, di un limite risulta **indeterminato** e va discusso più a fondo per giungere a un risultato (o a nessuno). Le forme indeterminate sono sette:
$$
+\infty - \infty,0\cdot\infty,\frac{0}{0},\frac{\infty}{\infty},0^0,\infty^0,1^\infty
$$
Un punto $x_0$ nel quale la funzione non è continua si dice di **discontinuità** se esso appartiene al dominio della funzione, altrimenti di **singolarità**. In ogni caso può essere:
- **1° specie**: $\displaystyle \exists\lim_{ x \to x_{0}^- } f(x) = l_{1}\in \mathbb{R} \land \exists\lim_{ x \to x_{0}^+}f(x) = l_{2} \in \mathbb{R} \land l_{1}\neq l_{2}$, per la quale si calcola il **salto** della funzione come $|l_{2}-l_{1}|$
- **2° specie**: $\displaystyle \neg{\exists}\lim_{ x \to x_{0}^\pm }f(x) \lor \exists \lim_{ x \to x_{0}^\pm }f(x)=\pm\infty$
- **3° specie**: $\displaystyle \exists \lim_{ x \to x_{0} }f(x)=l \in \mathbb{R} \land l\neq f(x_{0})$, nel cui caso viene detta **eliminabile** perché si può costruire un'altra funzione $g(x)$ tale che sia uguale ad $f(x)$ in ogni punto diverso da $x_{0}$ ed uguale ad $l$ in $x_0$.
---
## Teoremi sulle funzioni continue
Supponendo come ipotesi:
- $a,b \in \mathbb{R} \land f:[a,b] \to \mathbb{R} \space \land$
- $f \text{ continua in } [a,b]$

Si dimostrano i seguenti teoremi:
- teorema di **Weierstrass**: 
$$
\exists x_{m},x_{M} \in [a,b] : m=f(x_{m})\leq f(x)\leq f(x_{M})=M
$$
- teorema di **Darboux** (valori intermedi):
$$
\forall z \in [m, M]: \exists c \in[a,b] : f(c)=z
$$
- teorema di **Bolzano** (esistenza degli zeri):
$$
f(a)\cdot f(b)<0 \implies \exists c \in [a,b]:f(c)=0
$$
---
# Limiti notevoli
Alcuni limiti, sia data la loro importanza nell'analisi matematica in generale, sia dato il loro utilizzo nel calcolo delle [[Derivata|derivate]] delle funzioni trascendenti, sono detti **notevoli**:
$$
\lim_{ x \to 0 } \frac{\sin(x)}{x} = 1;\space \lim_{ x \to 0 } \frac{1-\cos(x)}{x} = 0; \space \lim_{ x \to 0 } \frac{1-\cos(x)}{x^2} = \frac{1}{2};
$$
$$
\lim_{ x \to \infty } \left(1+\frac{1}{x}\right)^x = e;\space \lim_{ x \to 0 } \frac{\log_{a}(x+1)}{x} = \log_{a}(e); \space \lim_{ x \to 0 } \frac{a^x-1}{x} = \ln(a);
$$
---
# Collegamenti
**Arte**: [[Art Nouveau|Klimt]]
**Filosofia**: [[Hegel]]
**Fisica**: [[Teoria della relatività]], Meccanica quantistica e infinite possibilità
**Inglese**: #TODO
**Italiano**: [[Giacomo Leopardi]]
**Latino**: [[Lucio Anneo Seneca]] (limitatezza dell'essere umano?)
**Scienze**: #TODO 
**Storia**: #TODO 
