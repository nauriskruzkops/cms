<?php

namespace Shared\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\Validator\Constraints as SecurityAssert;

/**
 * @ORM\Entity(repositoryClass="Shared\Repository\UserRepository")
 * @ORM\Table(name="users")
 * @UniqueEntity(
 *     fields={"email", "username"},
 *     errorPath="email",
 *     message="User with this email is already exists"
 * )
 */
class User implements UserInterface, \Serializable {

    use Traits\Traceability;
    use Traits\Serializable;

    const ROLE_USER = 'ROLE_USER';
    const ROLE_MANAGER = 'ROLE_MANAGER';
    const ROLE_ADMIN = 'ROLE_ADMIN';

    const ROLES = [
        self::ROLE_USER => 'User',
        self::ROLE_MANAGER => 'Manager',
        self::ROLE_ADMIN => 'Admin',
    ];

    const ROLES_ALL = [
        self::ROLE_USER => 'User',
        self::ROLE_MANAGER => 'Manager',
        self::ROLE_ADMIN => 'Admin',
    ];

    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     * @Assert\Length(
     *      min = 3,
     *      max = 50,
     *      minMessage = "Value must be at least {{ limit }} characters long",
     *      maxMessage = "Value cannot be longer than {{ limit }} characters"
     * )
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $surname;

    /**
     * @ORM\Column(type="string", length=255, nullable=true, unique=true)
     * @Assert\Email(
     *     message = "The email '{{ value }}' is not a valid email.",
     *     checkMX = true
     * )
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $username;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $password;

    /**
     * @Assert\Blank
     * @Assert\GreaterThan(5, groups={"update"})
     */
    private $plainPassword;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $salt;

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $roles;

    /**
     * @ORM\Column(type="boolean", length=100, nullable=true)
     */
    private $active;

    public function __construct()
    {
        $this->roles = [self::ROLE_USER];
        $this->active = true;
        $this->salt = md5(uniqid(null, true));
    }

    public function __toString()
    {
        return (string) $this->getFullName();
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param string $name
     * @return User
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return string
     */
    public function getSurname()
    {
        return $this->surname;
    }

    /**
     * @param string $surname
     * @return User
     */
    public function setSurname($surname)
    {
        $this->surname = $surname;

        return $this;
    }

    /**
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * @param string $email
     * @return User
     */
    public function setEmail($email)
    {
        $this->email = $email;
        return $this;
    }

    /**
     * @return string
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * @param string $username
     * @return User
     */
    public function setUsername($username)
    {
        $this->username = $username;

        return $this;
    }

    public function getFullName()
    {
        $fullName = [$this->name, $this->surname];
        $fullName = implode(' ', array_filter($fullName));

        if (empty($fullName)) {
            $fullName = $this->email;
        }

        if (empty($fullName)) {
            $fullName = $this->username;
        }

        return $fullName;
    }

    /**
     * @return string
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * @param string $password
     * @return User
     */
    public function setPassword($password)
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @return boolean
     */
    public function isActive()
    {
        return $this->active;
    }

    public function isEnabled()
    {
        return $this->isActive();
    }

    /**
     * @param boolean $active
     * @return User
     */
    public function setActive($active)
    {
        $this->active = $active;

        return $this;
    }

    /**
     * @return []
     */
    public function getRoles()
    {
        return array_unique($this->roles);
    }

    /**
     * @param mixed $roles
     * @return User
     */
    public function setRoles(array $roles = null)
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @return bool
     * @deprecated use $authChecker->isGranted('ROLE_USER')
     */
    public function isUser()
    {
        return (in_array(self::ROLE_USER, $this->getRoles()));
    }

    /**
     * @return bool
     * @deprecated use $authChecker->isGranted('ROLE_MANAGER')
     */
    public function isManager()
    {
        return (in_array(self::ROLE_MANAGER, $this->getRoles()));
    }

    /**
     * @return bool
     * @deprecated use $authChecker->isGranted('ROLE_ADMIN')
     */
    public function isAdmin()
    {
        return (in_array(self::ROLE_ADMIN, $this->getRoles()));
    }

    /**
     * @return string|null The salt
     */
    public function setSalt($salt)
    {
        $this->salt = $salt;

        return $this;
    }

    /**
     * @return string|null The salt
     */
    public function getSalt()
    {
        return $this->salt;
    }

    /**
     * Removes sensitive data from the user.
     *
     * This is important if, at any given point, sensitive information like
     * the plain-text password is stored on this object.
     */
    public function eraseCredentials()
    {
        // TODO: Implement eraseCredentials() method.
    }

    public function serialize()
    {
        return serialize([
            $this->id,
            $this->username,
            $this->password,
            $this->active,
        ]);
    }

    public function unserialize($serialized)
    {
        list (
            $this->id,
            $this->username,
            $this->password,
            $this->active
        ) = unserialize($serialized);
    }
}