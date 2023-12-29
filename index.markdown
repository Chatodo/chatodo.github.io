---
layout: default
---
<style>
.accordion-button {
    background-color: rgba(0,0,0,.03);
    cursor: pointer;
    padding: 16px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    transition: 0.4s;
	position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ccc;
    transition: background-color 0.3s ease;

}

.accordion-button:hover {
    background-color: #e2e2e2;
}

.accordion-button::after {
    font-size: 12px;
    position: absolute;
    right: 20px;
    transition: transform 0.4s;
}

.accordion-button i {
    transition: transform 0.4s;
}

.accordion-button.active i {
    transform: rotate(180deg);
}

.accordion-content {
    padding: 0 18px;
    display: none;
    overflow: hidden;
    background-color: #F8F8FF;
    color: #333;
	font-size: 0.85em;
}

.accordion-content.active {
    display: block;
}

</style>
🧑‍🎓 Currently pursuing a Master's Degree in Computer Science with a specialization in Cybersecurity and e-health at Université Paris Cité.

🔒 Interested in Cybersecurity, with a particular focus on the Internet of Things (IoT).

<hr>
<div class="accordion">
🎓 Educational Background:
    <div class="accordion-item">
        <button class="accordion-button" type="button">
            2023-2025: Cybersecurity and e-health at Université Paris Cité <i class="fas fa-chevron-down"></i>
        </button>
        <div class="accordion-content">
		<ul>
			In french : <a href="https://biomedicale.u-paris.fr/master-informatique/master-informatique-parcours-cybersecurite-et-esante/">https://biomedicale.u-paris.fr/master-informatique/master-informatique-parcours-cybersecurite-et-esante/</a>
			<br>
			1st Year:
			<br>
            <li>Advanced Programming (C, Python)</li>
			<li>Algorithmic Complexity and Combinatorial Optimization</li>
			<li>Advanced Internet and TCP/IP Networks</li>
			<li>Advanced Unix/Linux Operating Systems</li>
			<li>Cryptography and Computer Security</li>
			<li>Cybersecurity and Ethical Hacking</li>
			<li>Network and System Security</li>
			<li>Probability and Statistics for Engineers</li>
			<li>Artificial Intelligence, Machine Learning, and Data Science</li>
			<li>Digital Law, English, and Project Management</li>
			<li>Supervised Cyber Project</li>
		</ul>
        </div>
    </div>
    <div class="accordion-item">
        <button class="accordion-button" type="button">
            2022-2023: 1st year in Master CCA (Cryptology, High-performance computing, and Algorithms) at Sorbonne University <i class="fas fa-chevron-down"></i>
        </button>
        <div class="accordion-content">
		<ul>
			<a href="https://cca.lip6.fr/en/">https://cca.lip6.fr/en/</a>
            <li>Complexity, Randomized and Approximation Algorithms</li>
			<li>Numerical and Symbolic Algorithm Modeling (including Linear Algebra, SVD, QR, Karatsuba, FFT, etc.)</li>
			<li>Numerical Algorithms (such as Gradient Descent, Newton's Method, etc.)</li>
			<li>Fundamentals of Algebraic Algorithms (GCD, FFT, etc.)</li>
			<li>Cryptology (covering RSA, AES, DES, SHA, OpenSSL)</li>
			<li>Parallel Programming (OpenMP, MPI, AVX2)</li>
			<li>Linux Kernel Programming</li>
			<li>Computer Architecture (MIPS)</li>
			<li>Distributed Algorithms (MPI, P2P, leader election, termination detection, etc.)</li>
		</ul>
        </div>
    </div>
    <div class="accordion-item">
		<button class="accordion-button" type="button">
			2018-2022: Bachelor's degree in Computer Science at Sorbonne Paris Nord <i class="fas fa-chevron-down"></i>
		</button>
        <div class="accordion-content">
		<ul>
			In french : <a href="http://odf.univ-paris13.fr/fr/offre-de-formation/feuilleter-le-catalogue-1/sciences-technologies-sante-STS/licence-lmd-XA/licence-informatique-program-gl4inf-116-2-2.html">http://odf.univ-paris13.fr/fr/offre-de-formation/feuilleter-le-catalogue-1/sciences-technologies-sante-STS/licence-lmd-XA/licence-informatique-program-gl4inf-116-2-2.html</a>
			<br>
            <li>Algebra, Analysis, Probability & Statistics, Language Theory, Graph Theory, Computability</li>
			<li>Algorithm Design, Imperative Programming and Data Structures (C), Principles of Programming and Functional Programming (OCaml), Object-Oriented Programming (Java), Web Programming (JS, PHP), Unix Programming, Data Visualization</li>
			<li>Computer Architecture, Database Systems, Systems and Networks (C), System Administration (Linux)</li>
			</ul>
        </div>
	</div>
</div>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        var acc = document.getElementsByClassName("accordion-button");
        for (var i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }
    });
</script>
<hr>
💻 Technical Skills:
- Imperative/System Programming: C, Python, Bash/Shell
- Functional Programming: OCaml
Object-Oriented Programming: Python, Java, C++
- Web Programming: PHP, HTML, CSS, JavaScript, jQuery, Bootstrap, MySQL
- Parallel Programming: OpenMPI, OpenMP, AVX
- Data Visualization: Pandas, NumPy, Matplotlib, Seaborn, Plotly, scikit-learn
- Basic Cybersecurity Knowledge (Cryptography, Operating System Security, Network Security)
<hr>
📁 [List of Projects Completed During My Bachelor's Degree](https://github.com/Chatodo/Projets-Licence/blob/main/README_EN.md)
<hr>
<img src="files/images/cat_computer.jpg" alt="cat_computer"/> <br>
<small><i>&nbsp;Not me.</i></small>

