// recursion.cpp
// Recursion — Brandon Hopkins
// for 9 violins, 6 violas, 3 cellos
// duration: 07:21

constexpr int REPEAT = 4;

Layer A = strings(3,  0);
Layer B = strings(3, -1);
Layer C = strings(3, -2);
Layer D = cello();
Layer E = strings(4,  0);
Layer F = cello();

void recursion()
{
    add(A); loop(REPEAT);
    add(B); loop(REPEAT);
    add(C); loop(REPEAT);
    add(D); loop(REPEAT);
    add(E); loop(REPEAT);
    add(F); loop(REPEAT);

    remove(F); loop(REPEAT);
    remove(D); loop(REPEAT);
    remove(C); loop(REPEAT);
    remove(B); loop(REPEAT);
    remove(A); loop(REPEAT);

    end();
}

int main()
{
    recursion();
    return 0;
}