#ifndef BLOC4_H
#define BLOC4_H

#include "BlocAbstrait.h"

class Bloc4 : public BlocAbstrait
 {
  public:

   Bloc4 (bool fromScratch = false);

   virtual BlocAbstrait* cloner   ();
   virtual void          afficher ();
 };

#endif // BLOC4_H
