# Equazioni di Maxwell
## Premesse matematiche
Sono un sistema di **quattro equazioni integro-differenziali**, ovvero equazioni che legano una quantità con la **variazione nel tempo di un'altra** o di se stessa.
In particolare, sono relative agli **operatori vettoriale** di **flusso** e alla **circuitazione** di ognuno del campo elettrico e di quello magnetico:
- il flusso è l'**integrale di superficie** del campo sulla superficie gaussiana $\Omega$ e rappresenta la **quantità di linee di campo** che attraversano la superficie
- la circuitazione è l'**integrale di linea** del campo su un percorso chiuso $\gamma$ ed esprime l'**energia presente** nel campo
A questi operatori vettoriale corrispondono quelli **differenziali** di **divergenza** e **rotore**.
## Descrizione
Analizziamo brevemente le quattro equazioni:
- Il **Teorema di Gauss per il campo elettrico** dimostra l'**esistenza delle *cariche* elettriche** affermando che
$$
\Phi_{\Omega}(E) = \frac{Q_{int}}{\epsilon}
$$
- Il **Teorema di Gauss per il campo magnetico** dimostra l'**inesistenza del *monopolo* magnetico** affermando che
$$
\Phi_{\Omega}(B) = 0
$$
- La **Legge di Faraday-Neumann-Lenz** prevede che la **variazione di un campo magnetico genera un campo elettrico indotto** affermando che
$$
\Gamma_{\gamma}(E) = -\frac{d\Phi_{S}(B)}{dt}
$$
- La **Legge di Ampere-Maxwell** afferma che la **variazione di un campo elettrico genera un campo magnetico indotto**
$$
\Gamma_{\gamma}(B) = \mu\left(i_{tot} + \epsilon\frac{d\Phi_{S}(E)}{dt}\right)
$$
# Onde elettromagnetiche
Da queste equazioni Maxwell teorizza l'esistenza delle **onde elettromagnetiche**: se in un punto dello spazio, privo di materia e di energia, si spende energia per **"accendere" un campo elettrico (o magnetico)**, tale campo ne genera uno **magnetico (o elettrico)**, e così anch'esso e così via. L'energia iniziale dunque si **propaga di punto in punto**, proprio come avviene con un'onda.
## Collegamenti
**Matematica**: le ultime due equazioni di Maxwell mettono in relazione il cambiamento istantaneo nel tempo, espressione che in matematica trova la sua formulazione nel concetto di [[Derivata|derivata]].