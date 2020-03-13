#ifndef BLOC6_H
#define BLOC6_H

#include "BlocAbstrait.h"

class Bloc6 : public BlocAbstrait
 {
  public:

   Bloc6 (bool fromScratch = false);

   virtual BlocAbstrait* cloner   ();
   virtual void          afficher ();
 };

#endif // BLOC6_H
