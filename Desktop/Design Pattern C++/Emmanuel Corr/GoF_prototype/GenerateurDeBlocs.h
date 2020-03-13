#ifndef GENERATEURDEBLOCS_H
#define GENERATEURDEBLOCS_H

#include "BlocAbstrait.h"

 class GenerateurDeBlocs
  {
   private :

    BlocAbstrait* tab [7];

   public:

    GenerateurDeBlocs();

    void generer ();
  };

#endif // GENERATEURDEBLOCS_H
