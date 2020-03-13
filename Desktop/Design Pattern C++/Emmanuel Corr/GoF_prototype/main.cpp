#include <iostream>

using namespace std;

#include "GenerateurDeBlocs.h"

int main()
 {
  cout << "Initialisation du jeu" << endl;
  cout << "=====================" << endl << endl;

  GenerateurDeBlocs g;

  cout << endl << "Deroulement du jeu" << endl;
  cout <<         "==================" << endl << endl;

  g.generer ();

  cout << endl << "Fin du jeu (vous etes mort, vous avez gagne !!)" << endl;
  cout <<         "===============================================" << endl << endl;

  return 0;
 }

